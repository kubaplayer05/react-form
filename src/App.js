import {useState} from "react";
import './App.css';
import Form from './Components/Form/Form';

function App() {

    const testUser = [
        {
            id: -1,
            username: "test",
            email: "test@test.pl",
            tel: "123456789",
            password: "test1234!"
        }
    ]

    const [users,addUser] = useState(testUser)

    const validSubmission = user => {

        const id = Math.random()

        const newUser = {
            ...user,
            id: id
        }

        addUser(prevState => {
            return [...prevState, newUser]
        })

        console.log(users)
    }

  return (
    <div className="App">
        <h1>Welcome to React Form validator!</h1>
        <Form onFormSubmit={validSubmission} />
    </div>
  );
}

export default App;
