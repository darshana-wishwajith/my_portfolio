import {businesses} from './../assets'

const Business = ({id}) => {
    const businessObj = businesses[id]
    return(
        <div>
            {/* Content */}
            <div>
                <div>
                    {businessObj.bname}
                </div>
                <div>

                </div>
            </div>
            {/* Cover Image */}
            <div>
                {/* <img src="" alt="" /> */}
            </div>
        </div>
    )
}

export default Business