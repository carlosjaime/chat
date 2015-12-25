import React from 'react';
import './embed.scss';

export default React.createClass({
    render: function() {
        if (this.props.data) {
            let embedContains = this.props.data.map(function(obj, i) {

                console.log(obj);

                let embedTitle = <div><strong>{obj.title}</strong></div>;

                let embedDesc = obj.type === 'video' ? null : (
                    <div><em>{obj.description}</em></div>
                );

                let embedInfo = (
                    <div className='message-embed-info'>
                                {embedTitle}
                                {embedDesc}
                    </div>
                );

                let embedImage = null;
                switch (obj.type) {
                    case 'video':
                        embedImage = (
                            <div className='message-embed-video'
                                dangerouslySetInnerHTML={{__html: obj.html}}
                            ></div>
                        );
                        break;
                    case 'photo':
                        embedImage = (
                            <img
                                className='message-embed-photo'
                                src={obj.url}
                            />
                        );
                        embedInfo = null;
                        break;
                    default:
                        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
                        let thUrl = obj.thumbnail_url;
                        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
                        embedImage = thUrl ? (
                            <img
                                className='message-embed-thumb'
                                src={thUrl}
                            />
                        ) : null;
                }

                return (
                    <div className='message-embed-item' key={i}>
                        {embedImage}
                        {embedInfo}
                    </div>
                );
            });

            return (
                <div className='message-embed'>
                    {embedContains}
                </div>
            );
        } else {
            return null;
        }
    }
});
