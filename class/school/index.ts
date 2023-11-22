import { Student } from "./student";
import { Teacher } from "./teacher";
import { Employee } from "./employee";

const student = new Student('Zadoc', 25, 'masculine', '005050', 'ADS');
const teacher = new Teacher('Silvani', 25, 'masculine', 10000, 'ADA');
const employee = new Employee('Zilda', 20, 'masculine', 'secretaria');

student.birthday();
student.cancelRegistration();
console.log('Informações do estudante');
console.log('Nome:', student.getName());
console.log('Idade:', student.getAge());
console.log('Sexo:', student.getSex());
console.log('Curso:', student.getCourse());
console.log('Matrícula:', student.getRegistration());

console.log();

teacher.birthday();
teacher.increase(5000);
console.log('Informações do estudante');
console.log('Nome:', teacher.getName());
console.log('Idade:', teacher.getAge());
console.log('Sexo:', teacher.getSex());
console.log('Salário:', teacher.getSalary());
console.log('Especialidade:', teacher.getSpecialty());

console.log();

employee.birthday();
employee.changeSector('diretoria');
console.log('Informações do estudante');
console.log('Nome:', employee.getName());
console.log('Idade:', employee.getAge());
console.log('Sexo:', employee.getSex());
console.log('Setor:', employee.getSector());

