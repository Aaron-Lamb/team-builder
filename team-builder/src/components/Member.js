import React from 'react';

const Members = (props) => {
    return(
        <div>
            {props.teamMember.map(member => (
                <div key={member.id}>
                    <h3>{member.name}</h3>
                    <h4>{member.email}</h4>
                    <h4>{member.role}</h4>
                    <button onClick={() => props.memberToEdit}>Edit team member</button>
                </div>
             ))}
        </div>
    )
}

export default Members;