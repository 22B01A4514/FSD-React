function Rev(){
    var names = ['Kalyani','Rugvedh','Ananth','Aakash','Eesha','Shloka','Radhika'];
    var descriptions = ['Good','Not bad','Too bad','Too worst','Good','Nice','Bad'];
    var paths = ['girl-4.jpg','girl-1.jpg','girl-2.jpg','girl-3.jpg','girl-4.jpg','girl-5.jpg','girl-2.jpg']
    return (
        <ul style={{fontSize:20}}>
        {names.map((name, index) => (
            <dl key={index}>
                <dt><img style={{borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}} src={paths[index]} width={20} height={20}></img>
                &nbsp;&nbsp;{name}</dt>
                <dd>--{descriptions[index]}</dd>
            </dl>
            ))}
        </ul>
    );
}
export default Rev;

