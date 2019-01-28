import React, {Component} from 'react';
import axios from 'axios';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: 0
        };
    }

    //this is an example http request
    handleClick = () => {
        axios.get('https://www.googleapis.com/youtube/v3/subscriptions').then(
            response => console.log(response)
        )
    }

    addVisitor = () => {
        // let realTimeDB = this.props.db.database().ref('website visitors');
        // realTimeDB.push({message: 5});

        let storageDB = this.props.db.collection("Website Visitors").doc(
            "Number of Visitors"
        );

        storageDB.get().then(function(doc) {
            if (doc.exists) {
                this.setState({"views": doc.data().numvisitors});
                storageDB.set({
                    numvisitors: doc.data().numvisitors + 1
                });
            }
        }.bind(this)).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    componentWillMount() {
        this.addVisitor();
    }

    render() {

        return (<header>
            {"Total number of views: " + this.state.views}
            {/*}<button onClick={this.handleClick}></button>*/}
        </header>
        );
    }
}