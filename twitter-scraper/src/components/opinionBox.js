const opinionBox = () => {

    let getOpinion = async () => {
        const res = await fetch(`http://127.0.0.1:5000/getOpinion?topic=${document.getElementById("opinion-input").value}`);
        const res_json = await res.json();
        console.log(res_json);
        document.getElementById("opinion-output").innerHTML = `<h1>how ${document.getElementById("opinion-input").value} is received:</h1>
                                                                <p>${res_json.opinion}</p>
                                                                <h1>Example tweets:</h1>
                                                                <p>${res_json.examples[0]}</p>
                                                                <p>${res_json.examples[1]}</p>
                                                                <p>${res_json.examples[2]}</p>`
    }

    return (
        <div className="text-box" style= {{ paddingTop: 0}}>
            <div className="message-box">
                <h3>inquire sentiments on a topic</h3>
                <div id="opinion-output"></div>
                    <input type="text" id="opinion-input" placeholder="Enter topic name" />
                    <button onClick={getOpinion} className="button" style={{color: "#000", border: "1px solid #000"}}>get public opinion</button>
            </div>
        </div>
    )
}

export default opinionBox