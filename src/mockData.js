import { v4 as uuidv4 } from 'uuid';

export const topics = [
    {
        title:'Who are you from the Winx club',
        questions:[
            {
                id: uuidv4(),
                text:'',
                correctAnswer:'',
                variants:[{
                    id: uuidv4(),
                    label: '',
                }]
            }
        ]
    }
]