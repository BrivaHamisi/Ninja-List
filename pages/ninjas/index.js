export const getStaticProps = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    console.log(data)

    return {
        props: {ninjas: data},
        // revalidate: 10
    }
    
}

const Ninjas = ({ ninjas }) => {
    return ( 
        <div>
            <h1>Ninjas</h1>
            <p>Welcome to the Ninja Academy!</p>
            { ninjas.map(ninja =>{
                return <div key={ninja.id}>{ninja.name}</div>
            })}
        </div>
     );
}
 
export default Ninjas;