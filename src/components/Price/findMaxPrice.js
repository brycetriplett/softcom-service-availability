import { towerCoverageAPI, parseResponse } from "../../api"
import tiers from '../../prices'


const findMaxPrice = async (data) => {
    let formData = {...data}
    let resultList = {}

    const process = async (formData) => {
        const timeoutID = setTimeout(()=>{}, 2000)
        clearTimeout(timeoutID)
        console.log('starting api request!')
        let request = await towerCoverageAPI('EUSPrequalAPI', formData)
        let result = parseResponse(request.data)
        console.log('api answer: ' + result)
        return result
    }

    formData.multicoverageid = tiers.main.low.mcid
    let result = await process(formData);

    if (result === 'yes') {
        resultList = {...tiers.main.low.values};
        formData.multicoverageid = tiers.main.high.mcid

        let result = await process(formData)
        if (result === 'yes') {
            resultList = {...resultList, ...tiers.main.mid.values, ...tiers.main.high.values}

        } else {
            formData.multicoverageid = tiers.main.mid.mcid

            let result = await process(formData);
            if (result === 'yes') {
                resultList = {...resultList, ...tiers.main.mid.values}
            }
        }

    } else {
        resultList = {...tiers.alternative}
    }

    return resultList
}


export default findMaxPrice