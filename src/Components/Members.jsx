import React from 'react';
import { MembersPercategory } from './Arrays';
import Member from './Member';
import { FaPeopleGroup } from 'react-icons/fa6';

const CategoryMembers = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full items-center gap-4 my-9">
        <h1 className="font-bold text-4xl text-primary">Meet</h1>
        <FaPeopleGroup size={50} className="text-secondary" />
        <h2 className="text-2xl text-primary">Our Team</h2>
      </div>
      {MembersPercategory.map((category, index) => {
        return (
          <div key={index}>
            <div key={index} className="divider my-10">
              {category.CategoryName}
            </div>
            <Members MembersArray={category.members} />
          </div>
        );
      })}
    </div>
  );
};

const Members = ({ MembersArray }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
      {MembersArray.map((member, index) => (
        <Member key={index} member={member} />
      ))}
    </div>
  );
};

export default CategoryMembers;
