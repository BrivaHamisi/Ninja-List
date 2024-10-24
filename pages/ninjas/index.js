import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);

    return {
        props: { ninjas: data },
        // revalidate: 10
    };
};

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>Ninjas</h1>
            <p>Welcome to the Ninja Academy!</p>
            {
                ninjas.map(ninja => (
                    <div key={ninja.id}>
                        <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                        </a>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default Ninjas;
