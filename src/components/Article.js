import React from 'react';


const Article = ({title,author,text}) => {

    const styles = {
        marginTop: 40
    }
    return ( 
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: 'uppercase'
            }}>{title}</h3>
            <span style={{marginBottom: 10,
            display: 'block',
            fontSize: 12,
            fontStyle: 'italic'
            }}>{author}</span>
            <p style={{
                fontSize: 15
            }}>{text}</p>
        </article>
     );
}
 
export default Article;