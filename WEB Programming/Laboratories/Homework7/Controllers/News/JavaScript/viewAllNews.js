let currentPage = 0;
let showType = 'all';

const insertData = (newBody, data) => {
    if (currentPage === 0) {
        $('#previousButton').attr('disabled', true);
    }
    let result = JSON.parse(data);
    let numberOfPages = Math.ceil(result.length / 4);
    for (let log of result) {
        let newRow = newBody.insertRow();
        if (result.indexOf(log) >= 4 * currentPage) {
            for (let index of ['NewsTitle', 'NewsDatePosted', 'NewsCategory', 'NewsContent', 'NewsProducer']) {
                let newCol = newRow.insertCell();
                let newText = document.createTextNode(log[index]);
                newCol.appendChild(newText);
            }
            newBody.append(newRow);
        }
        if (result.indexOf(log) >= 4 * currentPage + 3) {
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

const showNews = () => {
    let body = $('.newsTable tbody').eq(0);
    let newBody = document.createElement('tbody');
    $.ajax({
        type: 'GET',
        url: "../../DataBase/DataBaseConnection.php",
        data: {action: 'selectAllNews'},
        success: (data) => {
            insertData(newBody, data);
        },
        error: () => {
            alert("There are no news in the database! \n Or the database is not connected!");
        }
    })
    body.replaceWith(newBody);
}

const showNewsByCategory = (category) => {
    let body = $('.newsTable tbody').eq(0);
    let newBody = document.createElement('tbody');
    $.ajax({
        type: 'GET',
        url: "../../DataBase/DataBaseConnection.php",
        data: {action: 'selectNewsByCategory', category: category},
        success: (data) => {
            $('.form-control').val("");
            insertData(newBody, data);
        },
        error: () => {
            alert("The filter field is empty!");
            showType = 'all';
            showCorrectNews();
        }
    })
    body.replaceWith(newBody);
}

const showNewsByYear = (year) => {
    let body = $('.newsTable tbody').eq(0);
    let newBody = document.createElement('tbody');
    // console.log(year);
    $.ajax({
        type: 'GET',
        url: "../../DataBase/DataBaseConnection.php",
        data: {action: 'selectNewsByYear', year: year},
        success: (data) => {
            // console.log(data)
            // $('#categoryInputFilter').val("");
            insertData(newBody, data);
        },
        error: () => {
            alert("The filter field is empty!");
            showType = 'all';
            showCorrectNews();
        }
    })
    body.replaceWith(newBody);
}

const showCorrectNews = () => {
    switch (showType) {
        case 'all':
            showNews();
            break;
        case 'category':
            let category = $('#categoryInputFilter').val().trim();
            showNewsByCategory(category);
            break;
        case 'year':
            let year = $('#yearInputFilter').val().trim();
            showNewsByYear(year);
            // console.log(year);
            break;
    }
}

$(document).ready(() => {
    showNews();

    $('#allNewsButton').click(() => {
        currentPage = 0;
        showType = 'all';
        showCorrectNews();
    })

    $('#filterByCategoryButton').click(() => {
        currentPage = 0;
        showType = 'category';
        showCorrectNews();
    })

    $('#filterByYearButton').click(() => {
        currentPage = 0;
        showType = 'year';
        showCorrectNews();
    })

    $('#previousButton').click(() => {
        if (currentPage > 0) {
            currentPage--;
            if (currentPage === 0) {
                $('#previousButton').attr('disabled', true);
            }
        }
        showCorrectNews();
    })

    $('#nextButton').click(() => {
        $('#previousButton').attr('disabled', false);
        currentPage++;
        showCorrectNews();
    })
})