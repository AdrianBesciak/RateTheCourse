export class Course {
    shortName:string;
    name:string;
    ects:number;
    semester:number;
    lecture:boolean;
    exercises:boolean;
    laboratory:boolean;
    project:boolean;
    maxAmountOfStudents:number;
    courseRate:number;
    img:string;
    isOpened:boolean;

    constructor(shortName, name, ects, semester, lecture, exercises, laboratory, project, maxAmountOfStudents, courseRate, img, isOpened) {
        this.shortName = shortName;
        this.name = name;
        this.ects = ects;
        this.semester = semester;
        this.lecture = lecture;
        this.exercises = exercises;
        this.laboratory = laboratory;
        this.project = project;
        this.maxAmountOfStudents = maxAmountOfStudents;
        this.courseRate = courseRate;
        this.img = img;
        this.isOpened = isOpened;
    }
}