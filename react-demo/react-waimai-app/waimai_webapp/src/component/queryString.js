
export default function(n, url) {
    var m;
    var result;
    var search;

    if (url) {
        m = url.match(/\?[^#]+/);
        search = !m ? '' : m[0];
    } else {
        search = window.location.search;
    }

    m = search.match(new RegExp('(?:\\?|&)' + n + '=([^&]*)(&|$)'));

    
    try {
        result = !m ? '' : decodeURIComponent(m[1]);
    } catch (e) {
        result = '';
    }

    return String(result);
}