import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => {
    return (
        <div className="row"><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div></div>
    )
}

export default Loader
