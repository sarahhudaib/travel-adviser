import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',

  },
  headers: {
    'X-RapidAPI-Key': 'a4936cb31dmsh1f581a4039e755ep16d8c9jsnae863238a4e4',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try {
//request
        const { data: { data } } = await axios.get(URL, options)
        return data
    }
    catch (error) {
        console.log(error)

    }
}