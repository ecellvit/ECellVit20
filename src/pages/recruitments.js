import React from 'react';
import DarkBg from '../Components/DarkBg';
import TextInput from '../Components/TextInput';

function Recruitments() {
    const form=(
        <div>
        <TextInput
                id="RegNo"
                type="text"
                label="Registration Number"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
              <br></br>
              <br></br>
                <TextInput
                id="Name"
                type="text"
                label="Name"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
              <br></br>
              <br></br>
                <TextInput
                id="phone"
                type="text"
                label="WhatsApp Number"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
              <br></br>
              <br></br>
                <TextInput
                id="vitmail"
                type="text"
                label="VIT Email ID"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
              <br></br>
              <br></br>
                <TextInput
                id="vitmail"
                type="text"
                label="VIT Email ID"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
              <br></br>
              <br></br>
                <TextInput
                id="vitmail"
                type="text"
                label="VIT Email ID"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
              <br></br>
              <br></br>
                <TextInput
                id="vitmail"
                type="text"
                label="VIT Email ID"        
                style={{ width: '35%'
                         ,justifyContent: 'center'
                        }}
              />
        </div>
    )
    return (
        <span id="about">
            <DarkBg id="form" head="Register" content={form}/>
            
        </span>
    );
}

export default Recruitments;
