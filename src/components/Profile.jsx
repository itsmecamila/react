import Avatar from "./Avatar";
import Card from "./Card";


export default function Profile(){
    return(
        // <img
        // src="https://github.com/itsmecamila.png"
        // alt="Camila Marques"
        // width={100}
        // height={100}
        // />

        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>

    );
}