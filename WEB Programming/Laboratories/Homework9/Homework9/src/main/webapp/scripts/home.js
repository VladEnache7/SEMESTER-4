const URLFactory = (id, username, url, ownerId, popularity) => {
    let deleteButton = '';
    try {
        const storedUserId = JSON.parse(localStorage.getItem('user')).user_id;
        if (ownerId === storedUserId) {
            deleteButton = `<a id="deleteURLButton${id}" href="#" class="card-link">Delete</a>`;
            console.log('delete button added');
        }
    } catch (e) {
        console.log('User not logged in');
    }
    return `
    <div id="URL${id}" class="card mb-3">
        <div class="card-header">
            <p class="card-text">${username}</p>
        </div>
        <div class="card-body">
            <h4 class="card-link">${url}</h4>
            <p class="card-text">Popularity: ${popularity}</p>
        </div>
        <div class="card-footer">
            ${deleteButton}
        </div>
        
        
    </div>`;
}
//
const setUpURL = (id) => {
    $(`#deleteURLButton${id}`).click((event) => {
        console.log('delete clicked');
        event.preventDefault();

        if (!confirm('Are you sure you want to delete this URL?')) {
            return;
        }

        $.ajax({
            url: '/forum_app_jsp_war_exploded/URL/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: () => {
                console.log('successful deleted');
                $(`#URL${id}`).remove();
            },
            error: (jqXHR, textStatus, errorThrown) => {
                if (jqXHR.status === 403) {
                    alert('You are not allowed to delete this URL');
                } else {
                    let win = window.open('', '_self');
                    win.document.write(jqXHR.responseText);
                }
            }
        });
    });
}
//
const getNewURL = (id, URLs) => {
    $.ajax({
        url: '/forum_app_jsp_war_exploded/URL/' + id,
        method: 'GET',
        contentType: 'application/json',
        success: (URL) => {
            console.log(id);
            console.log(URL);
            // console.log(URL.url_id, URL.user.username, URL.link, URL.user.user_id, URL.popularity)
            // URLs.append(URLFactory(URL.url_id, URL.user.username, URL.link, URL.user.user_id, URL.popularity));
            // setUpURL(URL.url_id);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            let win = window.open('', '_self');
            win.document.write(jqXHR.responseText);
        }
    });
}
//
window.onload = () => {
    $('#newURLButton').click(() => {
        const link = $('#URLLink').val();
        const popularity = $('#URLPopularity').val();

        if (!link || !popularity) {
            alert('Please fill in all fields');
            return;
        }

        $.ajax({
            url: '/forum_app_jsp_war_exploded/URL/' + JSON.parse(localStorage.getItem('user')).user_id,
            method: 'POST',
            data: JSON.stringify({
                link,
                popularity,
                user_id: JSON.parse(localStorage.getItem('user')).user_id
            }),
            contentType: 'application/json',
            success: (data) => {
                let URL = data;
                console.log(data);
                URLs.append(URLFactory(URL.url_id, URL.user.username, URL.link, URL.user.user_id, URL.popularity));
                setUpURL(URL.url_id);
                $('#URLLink').val('');
                $('#URLPopularity').val('');
            },
            error: (jqXHR, textStatus, errorThrown) => {
                let win = window.open('', '_self');
                win.document.write(jqXHR.responseText);
            }
        });
    });
    const URLs = $('#URLsList');
    let topNValue = $('#topN').val();
    topNValue = topNValue ? topNValue : '10';
    // TODO: there may be a bug here in the api call
    $.ajax({
        url: '/forum_app_jsp_war_exploded/URL/topN/' + topNValue,
        method: 'GET',
        contentType: 'application/json',
        success: (data) => {
            console.log(data);
            data.forEach(URL => {
                URLs.append(URLFactory(URL.url_id, URL.user.username, URL.link, URL.user.user_id, URL.popularity));
                setUpURL(URL.url_id);
            });
        },
        error: (jqXHR, textStatus, errorThrown) => {
            let win = window.open('', '_self');
            win.document.write(jqXHR.responseText);
        }
    });

    $('#topNButton').click(() => {
        topNValue = $('#topN').val();
        if (!topNValue) {
            alert('Please fill in the number of top URLs you want to see');
            return;
        }

        URLs.empty();
        $.ajax({
            url: '/forum_app_jsp_war_exploded/URL/topN/' + topNValue,
            method: 'GET',
            contentType: 'application/json',
            success: (data) => {
                data.forEach(URL => {
                    URLs.append(URLFactory(URL.url_id, URL.user.username, URL.link, URL.user.user_id, URL.popularity));
                    setUpURL(URL.url_id);
                });
            },
            error: (jqXHR, textStatus, errorThrown) => {
                let win = window.open('', '_self');
                win.document.write(jqXHR.responseText);
            }
        });
    });

    $('#logoutButton').click(() => {
        if (!confirm('Are you sure you want to logout?')) {
            return;
        }

        localStorage.removeItem('user');
        console.log('logged out');
    });
}