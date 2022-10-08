JSON.stringify({
    date: Date.now(),
    problems: $('tbody').find('tr').map((_, el) => {
        const tds = $(el).find('td'),
            levels = ['hard', 'medium', 'easy'];

        return {
            c: parseInt(tds.eq(1).attr('value')), // code
            n: tds.eq(2).attr('value'), // name
            u: tds.eq(2).find('a[href]').eq(0).attr('href'), // url
            // a: parseFloat(tds.eq(3).attr('value')), // acceptance
            l: levels.indexOf(tds.eq(4).find('span').eq(0).text().toLowerCase()), // level
            f: parseFloat(tds.eq(5).find('.progress-bar').eq(0).css('width')) // frequency
        };
    }).get()
});