/// <reference path='./subjects/Cpp.ts' />
/// <reference path='./subjects/Java.ts' />
/// <reference path='./subjects/React.ts' />
/// <reference path='./subjects/Subject.ts' />
/// <reference path='./subjects/Teacher.ts' />

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: SUbjects.React = new Subjects.React();

export const cTeacher: Subjects.TeacherInterface = {
       firstName: 'Ginja',
       lastName: 'Patty,
       experienceTeachingC: 10
}
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
