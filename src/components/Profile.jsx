import Avatar from "./Avatar";

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}

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
                    name: 'Camila',
                    imageId: 'itsmecamila'
                }}
            />
        </Card>

    );
}