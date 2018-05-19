export const typeDefs = `
  type Query {
    demo: String
    project(id: String): Project
  }
  
  type Element {
      element_id: String
      isUnique: Boolean
      template: String
      properties: ElementProperties
  }
  
  type ElementProperties @model {
      size: Int
      type: String
      content: String
      custom: String
  }
  
  type StructureChildren @model {
    element_id: String
    children: [StructureChildren]
    isUnique: Boolean
    template: String
    properties: ElementProperties
  }
  
  type Structure @model {
    _id: ID
    project_id: String
    structure: [StructureChildren]
  }
 
 type Project @model {
    name: String
    structure: [StructureChildren]
 }
 
 type Mutation {
    example: String
 }
 
 type Subscription {
    test: String
 }
 
 schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
 }
 
`

// export const typeDefs = `
//   type Project @model {
//     _id: String! @isUnique
//     id: String! @isUnique
//     name: String!
//   }
//
//   type Element @model {
//     id: String
//     element_id: String
//     isUnique: Boolean
//     template: String
//     properties: ElementProperties
//   }
//
//   type ElementProperties @model {
//       size: Number
//       type: String
//       content: String
//       custom: String
//   }
//
//   type ElementsRoot @model {
//     project_id: String
//     elements: [Element]
//   }
//   type StructureRoot @model {
//     id: String!
//     project_id: String!
//     structure: [Structure]
//   }
//
//   type Structure @model {
//     element_id: String!
//     children: [Structure]
//     ... Element
//   }
//
// `;