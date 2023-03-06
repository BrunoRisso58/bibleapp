export default async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '69429c6d52mshbf884f8d222d712p12bb0djsne05d7c0b5898',
            'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
        }
    };

    // if (error.value) {
    //     throw createError({
    //         statusCode: error.value.statusCode,
    //         statusMessage: error.value.statusMessage
    //     })
    // }

    const { data } = await useFetch('https://iq-bible.p.rapidapi.com/GetBooksNT?language=english', options);
    return { data };
}