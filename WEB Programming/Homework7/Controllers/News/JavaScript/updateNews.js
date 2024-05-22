const fillFields = (id) => {
    console.log(id);
    $.ajax({
        type: 'GET',
        url: "../../DataBase/DataBaseConnection.php",
        data: {
            action: 'selectNewsById',
            id: id
        },
        success: (data) => {
            // console.log(data);
            let news = JSON.parse(data)[0];
            // console.log(news);
            $('#titleField').val(news['NewsTitle']);
            $('#categoryField').val(news['NewsCategory']);
            $('#contentField').val(news['NewsContent']);
        }
    });
}

$(document).ready(() => {
    fillFields(new URL(window.location.href).searchParams.get('id'));

    $('#editNewsButton').click(() => {
        let title = $('#titleField').val();
        let category = $('#categoryField').val();
        let content = $('#contentField').val();

        // Get the id from the url
        let url = new URL(window.location.href);
        let id = url.searchParams.get('id');

        console.log(id, title, category, content);
        if (title.trim().length > 0 && category.trim().length > 0 && content.trim().length > 0) {
            $.ajax({
                type: 'GET',
                url: "../../DataBase/DataBaseConnection.php",
                data: {
                    action: 'updateNews',
                    title: title,
                    category: category,
                    content: content,
                    id: id
                },
                success: (data) => {
                    console.log(data);
                    //     navigate to addNews page
                    window.location.href = `addNews.php`;
                }
            });
        }
    });
}); 

