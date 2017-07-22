# dangerouslySetInnerHTML


```
render() {
    var html = "Shen&nbsp;Bao";
    return (
        <div>
            <p>{html}</p> {/*需要进行 Unicode 的转码*/}
            <p dangerouslySetInnerHTML ={{__html : html}}></p>
        </div>
    );
}
```




















