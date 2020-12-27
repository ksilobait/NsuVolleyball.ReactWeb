import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../static/css/news-page.css'

export class NewsPage extends Component {
    static propTypes = {
        // from Home
        isAuthorized: PropTypes.bool.isRequired
    }

    state = {
        selectedForViewGame: null,
        news: []
    }

    componentDidMount() {
        const news = [
            {
                key: 0,
                title: "Филипп Киркоров устроил сюрприз в день рождения дочери – видео",
                body: `
                Филипп Киркоров воспитывает двоих детей.
                В честь дней рождения наследников поп-король постоянно организует вечеринки.
                Киркоров даже владеет компанией, которая устраивает праздники всем желающим.
                «В первый день зимы по традиции отмечаем день рождения Аллы-Виктории.
                Нам 9 лет! Время сюрпризов! Приготовили много волшебства. Праздник начинается!»
                 — отметил Филипп в Instagram.
                `,
                date: "20.11.2020"
            },
            {
                key: 1,
                title: "Первый официальный комментарий ТНТ об увольнении Сергея Сафронова за взятки из «Битвы экстрасенсов»",
                body: `
                На днях в Интернете появилась информация, которая удивила и расстроила поклонников мистического шоу.
                Оказалось, что один из бессменных ведущих вымогал миллионы у участников проекта за подсказки.
                Руководство канала поймало и уволило его.
                `,
                date: "23.11.2020"
            }
        ]
        this.setState({news})
    }

    render() {        
        return (
            <div>
                {this.renderTable(this.state.news)}
            </div>
        )
    }

    renderTable = (news) => {
        return news.map((x) => {
            return (
                <div class="news">
                    <div class='date'><div>{x.date}</div></div>
                    <div>
                        <div class='title'>{x.title}</div>
                        <div class='text'>{x.body}</div>
                    </div>
                </div>
            )
        })
    }

}
export default NewsPage
