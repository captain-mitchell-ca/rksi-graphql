# RKSI GraphQL

A [endpoint](https://rksi-graphql.netlify.app/) made for simple querying RKSI College schedule with GraphQL.

Search for teachers and groups implemented with querying by name (not ID or slug), so you must enter name correctly.

### Example query
    query groups {
      getGroupByName(name: "ПОКС-34") {
        name
        schedule {
          date
          schedule {
            subject
            start
            end
          }
        }
      }
    }

*P.S. More examples you can see on [endpoint](https://rksi-graphql.netlify.app/) in "Schemas" window at the right side*
