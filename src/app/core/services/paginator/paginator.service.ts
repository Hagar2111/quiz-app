import { Injectable } from '@angular/core';
import { IPager } from '../../models/IPager.model';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService<T> {

  initialPage = 1;
  pageSize = 10;
  currentPage = this.initialPage;
  rows?: Array<T>;

  pageOfRows?: Array<T>;
  pager?: IPager;

  constructor() { }

  initPaginator( pageNumber: number, pageSize: number){
    this.pageSize = pageSize;
    this.currentPage = pageNumber;
  }

  setRows(rows: Array<T>){
    this.rows = rows;
  }

  setPageSize(pageSize: number){
    this.pageSize = pageSize;
  }

  setPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPage(){
    if (!this.rows?.length) return;

    // get new pager object for specified page
    this.pager = this.paginate(
      this.rows.length,
      this.currentPage,
      this.pageSize
    );

    // get new page of items from items array
    this.pageOfRows = this.rows.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    return {
      pager: this.pager,
      pageOfRows: this.pageOfRows
    };
  }

  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10
  ): IPager {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number = 1, endPage: number= totalPages;

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);


    //pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex
    };
  }
}
