export const URL = "http://" + window.location.host + '/'

export const login = () => {
    var redirect_uri = "https://oauth.vk.com/authorize?client_id=7646501&display=page&redirect_uri=" + URL + "&scope=notify,ads,offline&response_type=token&v=5.122"
    window.location.replace(redirect_uri);
}

export const extractToken = () => {
    var href = window.location.href
    var data = href.split("#access_token=")[1].split('&expires_in=')
    var data2 = data[1].split('&user_id=')[1]

    const access_token = data[0]
    const user_id = data2

    console.log(access_token)
    console.log(user_id)
    return user_id
}
