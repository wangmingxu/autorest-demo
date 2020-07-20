/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const additionalMetadata: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "additionalMetadata"
  ],
  mapper: {
    serializedName: "additionalMetadata",
    type: {
      name: "String"
    }
  }
};
export const apiKey: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "apiKey"
  ],
  mapper: {
    serializedName: "api_key",
    type: {
      name: "String"
    }
  }
};
export const file: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "file"
  ],
  mapper: {
    serializedName: "file",
    type: {
      name: "Stream"
    }
  }
};
export const name: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "name"
  ],
  mapper: {
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const orderId: msRest.OperationURLParameter = {
  parameterPath: "orderId",
  mapper: {
    required: true,
    serializedName: "orderId",
    type: {
      name: "String"
    }
  }
};
export const password: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "password"
  ],
  mapper: {
    serializedName: "password",
    type: {
      name: "String"
    }
  }
};
export const petId0: msRest.OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    required: true,
    serializedName: "petId",
    type: {
      name: "Number"
    }
  }
};
export const petId1: msRest.OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    required: true,
    serializedName: "petId",
    type: {
      name: "String"
    }
  }
};
export const status0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "status"
  ],
  mapper: {
    serializedName: "status",
    defaultValue: available,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const status1: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "status"
  ],
  mapper: {
    serializedName: "status",
    type: {
      name: "String"
    }
  }
};
export const tags: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "tags"
  ],
  mapper: {
    serializedName: "tags",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const username0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "username"
  ],
  mapper: {
    serializedName: "username",
    type: {
      name: "String"
    }
  }
};
export const username1: msRest.OperationURLParameter = {
  parameterPath: "username",
  mapper: {
    required: true,
    serializedName: "username",
    type: {
      name: "String"
    }
  }
};
