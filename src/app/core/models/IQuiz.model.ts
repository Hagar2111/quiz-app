export interface IQuiz {
    code: string,
    _id: string,
    title: string,
    description: string,
    status: string,
    instructor: string,
    group: string,
    questions_number: number,
    questions: string[],
    schadule: string,
    duration: number,
    score_per_question: number,
    type: string,
    difficulty: string,
    updatedAt: string,
    createdAt: string,
    __v: number
}

export interface IQuizStudents extends IQuiz{
    studentsEnrolled: number
}