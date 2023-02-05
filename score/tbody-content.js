export function generateTabeBody(level) {
    const tbody = document.getElementsByTagName('tbody')[0]
    const EASY_TABLE = 'easy_table'
    const MEDIUM_TABLE = 'medium_table'
    const HARD_TABLE = 'hard_table'

    let results

    if (level == EASY_TABLE) {
        results = JSON.parse(window.localStorage.getItem(EASY_TABLE))
    } else if (level == MEDIUM_TABLE) {
        results = JSON.parse(window.localStorage.getItem(MEDIUM_TABLE))
    } else if (level == HARD_TABLE) {
        results = JSON.parse(window.localStorage.getItem(HARD_TABLE))
    }



    const sorted = results.sort((a, b) => {
        return toSeconds(a) - toSeconds(b)
    })

    sorted.forEach((result, index) => {
        const tr = document.createElement('tr')
        const tdPosition = document.createElement('td')
        const tdEmail = document.createElement('td')
        const tdTime = document.createElement('td')
        
        
        tdPosition.textContent = `${index}`
        tdPosition.classList.add('tbody-item')
        
        tdEmail.textContent = `${result['email']}`
        tdEmail.classList.add('tbody-item')
        
        tdTime.textContent = `${result['result']}`
        tdTime.classList.add('tbody-item')

        tr.appendChild(tdPosition)
        tr.appendChild(tdEmail)
        tr.appendChild(tdTime)
        tbody.appendChild(tr)
    })


    function toSeconds(a) {
       
        const result = a['result']
        const trimmed = result.replace(/\s/g, '')
        const resultValues = trimmed.split(':')

        const minutes = resultValues[0]
        const seconds = resultValues[1]

        if (minutes[0] == '0') {
            return minutes[1] * 60 + seconds
        }
        
        return minutes * 60 + seconds
    }
}