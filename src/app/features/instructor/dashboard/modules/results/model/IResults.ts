export interface Iquiz {
    _id:string;
    code:string;
    title:string;
    description:string;
    status:string;
    instructor:string;
    group:string;
    questions_number:number;
    schadule:string;
    duration:number;
    score_per_question:number;
    type:string;
    difficulty:string;
    updatedAt:string;
    createdAt:string;
    __v:number;
    closed_at:string;
}

export interface IResults {
    quiz:Iquiz;
    participants:IParticipant[];
}

export interface IQuizGroup extends IResults{
    groupName:string;
    studentsEnrolled: number;
}


export interface IParticipant {
    _id: string
    quiz: IQuiz2
    participant: IParticipant2
    score: number
    started_at: string
    finished_at: string
  }

  
  export interface IQuiz2 {
    _id: string
    title: string
  }
  
  export interface IParticipant2 {
    _id: string
    first_name: string
    last_name: string
    email: string
  }

  