let currentPage = 0;

const insertData = (newBody, data) => {
    if (currentPage === 0) {
        $('#previousButton').attr('disabled', true);
    }
    let result = JSON.parse(data);
    let numberOfPages = Math.ceil(result.length / 4);
    for (let news of result) {
        let newRow = newBody.insertRow();
        if (result.indexOf(news) >= 4 * currentPage) {
            for (let index of ['NewsTitle', 'NewsDatePosted', 'NewsCategory', 'NewsContent', 'NewsProducer']) {
                let newCol = newRow.insertCell();
                let newText = document.createTextNode(news[index]);
                newCol.appendChild(newText);
            }
            // also add at the end of the row an edit button
            let newCol = newRow.insertCell();
            let editButton = document.createElement('button');
            editButton.innerHTML = 'Edit';
            editButton.onclick = () => { // when the button is clicked, it will navigate to updateNews.php with the id of the news
                window.location.href = `updateNews.php?id=${news['NewsId']}`;
            }
            editButton.className = 'btn btn-info';
            editButton.style.maxWidth = '20px';
            editButton.style.width = '20px';

            newCol.appendChild(editButton);

            newBody.append(newRow);
        }
        if (result.indexOf(news) >= 4 * currentPage + 3) {
            break;
        }
    }
    if (numberOfPages === 0) {
        $('#nextButton').attr('disabled', true);
    } else {
        if (currentPage === numberOfPages - 1) {
            $('#nextButton').attr('disabled', true);
        } else {
            $('#nextButton').attr('disabled', false);
        }
    }
}

const showNewsByUser = () => {
    // get the username from the session
    let username = '';
    $.ajax({
        type: 'GET',
        url: 'getUsername.php',
        success: function (data) {
            username = data;
            // Insert the username into the <p> element
            $('#username').text(username);
        }
    });

    let body = $('.newsTable tbody').eq(0);
    let newBody = document.createElement('tbody');
    $.ajax({
        type: 'GET',
        url: "../../DataBase/DataBaseConnection.php",
        data: {action: 'selectNewsByUser', username: username},
        success: (data) => {
            // console.log(data);
            insertData(newBody, data);
        }
    })
    body.replaceWith(newBody);

}

$(document).ready(() => {
    showNewsByUser();
    $('#insertNewsButton').click(() => {
        let title = $('#titleField').val();
        let category = $('#categoryField').val();
        let content = $('#contentField').val();
        console.log(title, category, content);
        if (title.trim().length > 0 && category.trim().length > 0 && content.trim().length > 0) {
            $.ajax({
                type: 'GET',
                url: "../../DataBase/DataBaseConnection.php",
                data: {
                    action: 'addNews',
                    title: title,
                    category: category,
                    content: content
                },
                success: (data) => {
                    console.log(data);
                    // let res = JSON.parse(data);
                    if (data === 0) {
                        alert("News could not be added!");
                    } else {
                        $('.form-control').val("");
                        showNewsByUser();
                    }
                },
                error: () => {
                    alert("News could not be added!");
                }
            })
        } else {
            alert("Please enter valid data in all fields!");
        }
    })

    $('#previousButton').click(() => {
        if (currentPage > 0) {
            currentPage--;
            if (currentPage === 0) {
                $('#previousButton').attr('disabled', true);
            }
        }
        showNewsByUser();
    })

    $('#nextButton').click(() => {
        $('#previousButton').attr('disabled', false);
        currentPage++;
        showNewsByUser();
    })
})