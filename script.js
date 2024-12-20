function Count(CountId)
{
    let countElement = document.getElementById(CountId);
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
  }

document.getElementById("button1").addEventListener("click", function()
{
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (name && message)
    {
        var comment = document.createElement("div");
        comment.classList.add("comment");

        comment.innerHTML = `<strong>${name}</strong> <p>${message}</p><hr>`;

        document.getElementById("section1").appendChild(comment);

        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    }
    else
    {
        alert("이름과 의견을 모두 입력해주세요.");
    }
});