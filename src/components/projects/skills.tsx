import angularLogo from './icons/angular-logo.png';
import reactLogo from './icons/react-icon.png';
import flaskLogo from './icons/flask-logo.png';
import typeScriptLogo from './icons/typescript-logo.png';
import htmlLogo from './icons/html-logo.png';
import nodejsLogo from './icons/nodejs-logo.png';
import javaLogo from './icons/java-logo.png';
import mysqlLogo from './icons/mysql-logo.png';
import mongodbLogo from './icons/mongodb-logo.png';
import cssLogo from './icons/css-logo.png';
import sassLogo from './icons/scss-logo.png';
interface Skill{
    name: string;
    logo: string;
    videoURL: string[];
} 

export const skills:  Skill[] = [
    {name: 'HTML', logo: htmlLogo, videoURL: ['https://www.youtube.com/watch?v=dJ8v1XZS7uc']},
    {name: 'CSS3', logo: cssLogo, videoURL: ['https://www.youtube.com/watch?v=Zz6eOVaaelI']},
    {name: 'SCSS', logo: sassLogo, videoURL: ['nemtom']},
    {name: 'Typescript', logo: typeScriptLogo, videoURL: ['nemtom']},
    {name: 'Angular', logo: angularLogo, videoURL: ['nemtom']},
    {name: 'React', logo: reactLogo, videoURL: ['nemtom']},
    {name: 'Flask', logo: flaskLogo, videoURL: ['nemtom']},
    {name: 'NodeJS', logo: nodejsLogo, videoURL: ['nemtom']},
    {name: 'Java', logo: javaLogo, videoURL: ['nemtom']},
    {name: 'Mysql', logo: mysqlLogo, videoURL: ['nemtom']},
    {name: 'MongoDB', logo: mongodbLogo, videoURL: ['nemtom']}
]