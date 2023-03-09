export default async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '69429c6d52mshbf884f8d222d712p12bb0djsne05d7c0b5898',
            'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
        },
        params: { bookId: id }
    };

    const { data } = await useFetch('https://iq-bible.p.rapidapi.com/GetChapterCount', options);
    return { data };
}