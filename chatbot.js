async function sendMessage(){

let input=document.getElementById("chat-input");
let message=input.value;

if(message.trim()==="") return;

let chat=document.getElementById("chat-messages");

chat.innerHTML += "<div><b>You:</b> "+message+"</div>";

input.value="";

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
method: "POST",
headers: {
"Authorization": "Bearer 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",
"Content-Type": "application/json"
},
body: JSON.stringify({
"model": "openai/gpt-3.5-turbo",
"messages": [
{
"role":"system",
"content":"You are Arun Rao's AI assistant. Arun is a DevOps engineer skilled in AWS, Docker, Jenkins, Git, CI/CD pipelines and cloud infrastructure."
},
{
"role":"user",
"content":message
}
]
})
});

const data = await response.json();

let reply=data.choices[0].message.content;

chat.innerHTML += "<div><b>Arun AI:</b> "+reply+"</div>";

chat.scrollTop=chat.scrollHeight;

}

