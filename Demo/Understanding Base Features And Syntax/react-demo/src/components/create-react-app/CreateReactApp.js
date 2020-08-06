import React, { Component } from 'react';

class CreateReactApp extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="text-center display-3 page-title">Create React App</h1>
                <ul>
                    <li>
                        <p>
                            Install the package <code>create-react-app</code>, using the command <code>npm install create-react-app -g</code>
                        </p>
                    </li>
                    <li>
                        <p>
                            To create a react application with all the configurations, use command <code>create-react-app react-demo --scripts-version 1.1.5</code>
                        </p>
                    </li>
                    <li>
                        <p>
                            To run the newly created application, use commands <code>cd react-demo</code> and <code>npm start</code>
                        </p>
                    </li>
                </ul>
                
               
            </div>
        )
    }
}

export default CreateReactApp;