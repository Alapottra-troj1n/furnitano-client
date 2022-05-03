import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center my-28">Assignment Questions</h2>

            <div className="flex flex-col gap-5 container mx-auto mb-16">

                <div className="question-1">
                    <h2 className="text-3xl ">Difference Between Javascript and Nodejs</h2>
                    <p>Javascript is a programming language created to make websites interactive and it is built to run on the broswer but Nodejs is a runtime of Javascript that was modified and designed to work outside the broswer on server-side. Javascript uses complier engines that are built on the browser like V8, Spidermoneky etc while Nodejs runs on a modified version of Chrome's V8 engine. Nodejs is used in backend while Javascript is used in frontend development.</p>
                </div>
                <div className="question-2">
                    <h2 className="text-3xl ">When should you use Nodejs and when should you use Mongodb ?</h2>
                    <p>Nodejs should be used develop logics for the backend. It is a runtime of JavaScript that runs on server-side. It is asynchronous and non blocking because if that nature it is very good for IO intensive application/backend logic that requires handling a lot of network request even through it is single threaded. Mongodb is a noSQL database. It is used to store data or information in a more non traditional  way and because of it's JSON like structure it is very flexible and easy get started compared to SQL database.   </p>
                </div>
                <div className="question-3">
                    <h2 className="text-3xl ">Differences between SQL and noSQL databases </h2>
                    <p>SQL databases are relational and are strictly follow a structure while noSQL databases are non relational and follow a JSON object like structure. SQL databases use query languages but noSQL do not. SQL databases store data in a table based format while noSQL follow a object key-value, graph structure to store data</p>
                </div>
                <div className="question-4">
                    <h2 className="text-3xl ">What is JWT and how it works ?</h2>
                    <p>JWT stands for Json Web Token. It is used to transfer data or information securely between frontend and backend. It works by giving a encrpypted token to as a response and checks it's validation on a specfic request that needs a secure data transfer. It decrypts and checks the given token to see if the user that requested the data is authentic</p>
                </div>


            </div>
        </div>
    );
};

export default BlogPage;