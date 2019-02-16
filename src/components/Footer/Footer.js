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
            "PINRPcQ061nUISIIyeLj"
        );

        storageDB.get().then(function(doc) {
            if (doc.exists) {
                this.setState({"views": doc.data().visitors});
                console.log(doc.data().visitors);
                storageDB.set({
                    visitors: doc.data().visitors + 1
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
        return (
            <header>
                <div className="footer-container">
                    <div>
                        {"Total number of views: " + this.state.views}
                    </div>
                    <div className="tagline">Made by
                        <a href="https://uwblueprint.org/">UW Blueprint</a>
                    </div>
                    <div className="tagline">Copyright????</div>
                </div>
            </header>
        );
    }
}