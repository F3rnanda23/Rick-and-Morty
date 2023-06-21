import Card from "../Card/Card";
import { connect } from "react-redux";

const Favorites = ({myFavorites}) => {
    return(
        <>
            {
                myFavorites?.map(fav => {
                    return(
                        <Card 
                            key={fav.id} 
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            origin={fav.origin}
                            image={fav.image}
                        />
                            
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(
    mapStateToProps,
    null 
)(Favorites);