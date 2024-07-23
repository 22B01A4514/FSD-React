function Rev(){
    var names = ['abc','cde','efg','ghi','ijk','jkl','lmn'];
    var descriptions = ['Good','Not bad','Too bad','Too worst','Good','Nice','Bad'];
    var paths = []
    return (
        <ul>
        {names.map((name, index) => (
            <dl key={index}>
                <dt><img style={{borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}} src='boy-1.jpg' width={20} height={20}></img>
                &nbsp;&nbsp;{name}</dt>
                <dd>{descriptions[index]}</dd>
            </dl>
            ))}
        </ul>
    );
}
export default Rev;

