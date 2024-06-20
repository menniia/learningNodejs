import {writeFile} from 'node:fs';

writeFile('./hello.html', '<h1>Learning Nodejs</h1>', () => {
    console.log('file was created');
});