/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { SwaggerPetstoreContext } from "./swaggerPetstoreContext";

class SwaggerPetstore extends SwaggerPetstoreContext {
  /**
   * Initializes a new instance of the SwaggerPetstore class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.SwaggerPetstoreOptions) {
    super(options);
  }

  /**
   * @summary Fake endpoint to test byte array in body parameter for adding a new pet to the store
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addPetUsingByteArray(options?: Models.SwaggerPetstoreAddPetUsingByteArrayOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  addPetUsingByteArray(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  addPetUsingByteArray(options: Models.SwaggerPetstoreAddPetUsingByteArrayOptionalParams, callback: msRest.ServiceCallback<void>): void;
  addPetUsingByteArray(options?: Models.SwaggerPetstoreAddPetUsingByteArrayOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      addPetUsingByteArrayOperationSpec,
      callback);
  }

  /**
   * Adds a new pet to the store. You may receive an HTTP invalid input if your pet is invalid.
   * @summary Add a new pet to the store
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addPet(options?: Models.SwaggerPetstoreAddPetOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  addPet(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  addPet(options: Models.SwaggerPetstoreAddPetOptionalParams, callback: msRest.ServiceCallback<void>): void;
  addPet(options?: Models.SwaggerPetstoreAddPetOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      addPetOperationSpec,
      callback);
  }

  /**
   * @summary Update an existing pet
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updatePet(options?: Models.SwaggerPetstoreUpdatePetOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  updatePet(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePet(options: Models.SwaggerPetstoreUpdatePetOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updatePet(options?: Models.SwaggerPetstoreUpdatePetOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updatePetOperationSpec,
      callback);
  }

  /**
   * Multiple status values can be provided with comma seperated strings
   * @summary Finds Pets by status
   * @param [options] The optional parameters
   * @returns Promise<Models.FindPetsByStatusResponse>
   */
  findPetsByStatus(options?: Models.SwaggerPetstoreFindPetsByStatusOptionalParams): Promise<Models.FindPetsByStatusResponse>;
  /**
   * @param callback The callback
   */
  findPetsByStatus(callback: msRest.ServiceCallback<Models.Pet[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  findPetsByStatus(options: Models.SwaggerPetstoreFindPetsByStatusOptionalParams, callback: msRest.ServiceCallback<Models.Pet[]>): void;
  findPetsByStatus(options?: Models.SwaggerPetstoreFindPetsByStatusOptionalParams | msRest.ServiceCallback<Models.Pet[]>, callback?: msRest.ServiceCallback<Models.Pet[]>): Promise<Models.FindPetsByStatusResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      findPetsByStatusOperationSpec,
      callback) as Promise<Models.FindPetsByStatusResponse>;
  }

  /**
   * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
   * @summary Finds Pets by tags
   * @param [options] The optional parameters
   * @returns Promise<Models.FindPetsByTagsResponse>
   */
  findPetsByTags(options?: Models.SwaggerPetstoreFindPetsByTagsOptionalParams): Promise<Models.FindPetsByTagsResponse>;
  /**
   * @param callback The callback
   */
  findPetsByTags(callback: msRest.ServiceCallback<Models.Pet[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  findPetsByTags(options: Models.SwaggerPetstoreFindPetsByTagsOptionalParams, callback: msRest.ServiceCallback<Models.Pet[]>): void;
  findPetsByTags(options?: Models.SwaggerPetstoreFindPetsByTagsOptionalParams | msRest.ServiceCallback<Models.Pet[]>, callback?: msRest.ServiceCallback<Models.Pet[]>): Promise<Models.FindPetsByTagsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      findPetsByTagsOperationSpec,
      callback) as Promise<Models.FindPetsByTagsResponse>;
  }

  /**
   * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
   * @summary Fake endpoint to test byte array return by 'Find pet by ID'
   * @param petId ID of pet that needs to be fetched
   * @param [options] The optional parameters
   * @returns Promise<Models.FindPetsWithByteArrayResponse>
   */
  findPetsWithByteArray(petId: number, options?: msRest.RequestOptionsBase): Promise<Models.FindPetsWithByteArrayResponse>;
  /**
   * @param petId ID of pet that needs to be fetched
   * @param callback The callback
   */
  findPetsWithByteArray(petId: number, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param petId ID of pet that needs to be fetched
   * @param options The optional parameters
   * @param callback The callback
   */
  findPetsWithByteArray(petId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  findPetsWithByteArray(petId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.FindPetsWithByteArrayResponse> {
    return this.sendOperationRequest(
      {
        petId,
        options
      },
      findPetsWithByteArrayOperationSpec,
      callback) as Promise<Models.FindPetsWithByteArrayResponse>;
  }

  /**
   * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
   * @summary Find pet by ID
   * @param petId ID of pet that needs to be fetched
   * @param [options] The optional parameters
   * @returns Promise<Models.GetPetByIdResponse>
   */
  getPetById(petId: number, options?: msRest.RequestOptionsBase): Promise<Models.GetPetByIdResponse>;
  /**
   * @param petId ID of pet that needs to be fetched
   * @param callback The callback
   */
  getPetById(petId: number, callback: msRest.ServiceCallback<Models.Pet>): void;
  /**
   * @param petId ID of pet that needs to be fetched
   * @param options The optional parameters
   * @param callback The callback
   */
  getPetById(petId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pet>): void;
  getPetById(petId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pet>, callback?: msRest.ServiceCallback<Models.Pet>): Promise<Models.GetPetByIdResponse> {
    return this.sendOperationRequest(
      {
        petId,
        options
      },
      getPetByIdOperationSpec,
      callback) as Promise<Models.GetPetByIdResponse>;
  }

  /**
   * @summary Updates a pet in the store with form data
   * @param petId ID of pet that needs to be updated
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updatePetWithForm(petId: string, options?: Models.SwaggerPetstoreUpdatePetWithFormOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param petId ID of pet that needs to be updated
   * @param callback The callback
   */
  updatePetWithForm(petId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param petId ID of pet that needs to be updated
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePetWithForm(petId: string, options: Models.SwaggerPetstoreUpdatePetWithFormOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updatePetWithForm(petId: string, options?: Models.SwaggerPetstoreUpdatePetWithFormOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        petId,
        options
      },
      updatePetWithFormOperationSpec,
      callback);
  }

  /**
   * @summary Deletes a pet
   * @param petId Pet id to delete
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deletePet(petId: number, options?: Models.SwaggerPetstoreDeletePetOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param petId Pet id to delete
   * @param callback The callback
   */
  deletePet(petId: number, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param petId Pet id to delete
   * @param options The optional parameters
   * @param callback The callback
   */
  deletePet(petId: number, options: Models.SwaggerPetstoreDeletePetOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deletePet(petId: number, options?: Models.SwaggerPetstoreDeletePetOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        petId,
        options
      },
      deletePetOperationSpec,
      callback);
  }

  /**
   * @summary uploads an image
   * @param petId ID of pet to update
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  uploadFile(petId: number, options?: Models.SwaggerPetstoreUploadFileOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param petId ID of pet to update
   * @param callback The callback
   */
  uploadFile(petId: number, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param petId ID of pet to update
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadFile(petId: number, options: Models.SwaggerPetstoreUploadFileOptionalParams, callback: msRest.ServiceCallback<void>): void;
  uploadFile(petId: number, options?: Models.SwaggerPetstoreUploadFileOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        petId,
        options
      },
      uploadFileOperationSpec,
      callback);
  }

  /**
   * Returns a map of status codes to quantities
   * @summary Returns pet inventories by status
   * @param [options] The optional parameters
   * @returns Promise<Models.GetInventoryResponse>
   */
  getInventory(options?: msRest.RequestOptionsBase): Promise<Models.GetInventoryResponse>;
  /**
   * @param callback The callback
   */
  getInventory(callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getInventory(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getInventory(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<{ [propertyName: string]: number }>, callback?: msRest.ServiceCallback<{ [propertyName: string]: number }>): Promise<Models.GetInventoryResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getInventoryOperationSpec,
      callback) as Promise<Models.GetInventoryResponse>;
  }

  /**
   * @summary Place an order for a pet
   * @param [options] The optional parameters
   * @returns Promise<Models.PlaceOrderResponse>
   */
  placeOrder(options?: Models.SwaggerPetstorePlaceOrderOptionalParams): Promise<Models.PlaceOrderResponse>;
  /**
   * @param callback The callback
   */
  placeOrder(callback: msRest.ServiceCallback<Models.Order>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  placeOrder(options: Models.SwaggerPetstorePlaceOrderOptionalParams, callback: msRest.ServiceCallback<Models.Order>): void;
  placeOrder(options?: Models.SwaggerPetstorePlaceOrderOptionalParams | msRest.ServiceCallback<Models.Order>, callback?: msRest.ServiceCallback<Models.Order>): Promise<Models.PlaceOrderResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      placeOrderOperationSpec,
      callback) as Promise<Models.PlaceOrderResponse>;
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generated
   * exceptions
   * @summary Find purchase order by ID
   * @param orderId ID of pet that needs to be fetched
   * @param [options] The optional parameters
   * @returns Promise<Models.GetOrderByIdResponse>
   */
  getOrderById(orderId: string, options?: msRest.RequestOptionsBase): Promise<Models.GetOrderByIdResponse>;
  /**
   * @param orderId ID of pet that needs to be fetched
   * @param callback The callback
   */
  getOrderById(orderId: string, callback: msRest.ServiceCallback<Models.Order>): void;
  /**
   * @param orderId ID of pet that needs to be fetched
   * @param options The optional parameters
   * @param callback The callback
   */
  getOrderById(orderId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Order>): void;
  getOrderById(orderId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Order>, callback?: msRest.ServiceCallback<Models.Order>): Promise<Models.GetOrderByIdResponse> {
    return this.sendOperationRequest(
      {
        orderId,
        options
      },
      getOrderByIdOperationSpec,
      callback) as Promise<Models.GetOrderByIdResponse>;
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will
   * generate API errors
   * @summary Delete purchase order by ID
   * @param orderId ID of the order that needs to be deleted
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteOrder(orderId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param orderId ID of the order that needs to be deleted
   * @param callback The callback
   */
  deleteOrder(orderId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param orderId ID of the order that needs to be deleted
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteOrder(orderId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteOrder(orderId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        orderId,
        options
      },
      deleteOrderOperationSpec,
      callback);
  }

  /**
   * This can only be done by the logged in user.
   * @summary Create user
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createUser(options?: Models.SwaggerPetstoreCreateUserOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  createUser(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createUser(options: Models.SwaggerPetstoreCreateUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
  createUser(options?: Models.SwaggerPetstoreCreateUserOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createUserOperationSpec,
      callback);
  }

  /**
   * @summary Creates list of users with given input array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createUsersWithArrayInput(options?: Models.SwaggerPetstoreCreateUsersWithArrayInputOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  createUsersWithArrayInput(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createUsersWithArrayInput(options: Models.SwaggerPetstoreCreateUsersWithArrayInputOptionalParams, callback: msRest.ServiceCallback<void>): void;
  createUsersWithArrayInput(options?: Models.SwaggerPetstoreCreateUsersWithArrayInputOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createUsersWithArrayInputOperationSpec,
      callback);
  }

  /**
   * @summary Creates list of users with given input array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createUsersWithListInput(options?: Models.SwaggerPetstoreCreateUsersWithListInputOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  createUsersWithListInput(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createUsersWithListInput(options: Models.SwaggerPetstoreCreateUsersWithListInputOptionalParams, callback: msRest.ServiceCallback<void>): void;
  createUsersWithListInput(options?: Models.SwaggerPetstoreCreateUsersWithListInputOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createUsersWithListInputOperationSpec,
      callback);
  }

  /**
   * @summary Logs user into the system
   * @param [options] The optional parameters
   * @returns Promise<Models.LoginUserResponse>
   */
  loginUser(options?: Models.SwaggerPetstoreLoginUserOptionalParams): Promise<Models.LoginUserResponse>;
  /**
   * @param callback The callback
   */
  loginUser(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  loginUser(options: Models.SwaggerPetstoreLoginUserOptionalParams, callback: msRest.ServiceCallback<string>): void;
  loginUser(options?: Models.SwaggerPetstoreLoginUserOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.LoginUserResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      loginUserOperationSpec,
      callback) as Promise<Models.LoginUserResponse>;
  }

  /**
   * @summary Logs out current logged in user session
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  logoutUser(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  logoutUser(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  logoutUser(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  logoutUser(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      logoutUserOperationSpec,
      callback);
  }

  /**
   * @summary Get user by user name
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @param [options] The optional parameters
   * @returns Promise<Models.GetUserByNameResponse>
   */
  getUserByName(username: string, options?: msRest.RequestOptionsBase): Promise<Models.GetUserByNameResponse>;
  /**
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @param callback The callback
   */
  getUserByName(username: string, callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUserByName(username: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.User>): void;
  getUserByName(username: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.User>, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.GetUserByNameResponse> {
    return this.sendOperationRequest(
      {
        username,
        options
      },
      getUserByNameOperationSpec,
      callback) as Promise<Models.GetUserByNameResponse>;
  }

  /**
   * This can only be done by the logged in user.
   * @summary Updated user
   * @param username name that need to be deleted
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateUser(username: string, options?: Models.SwaggerPetstoreUpdateUserOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param username name that need to be deleted
   * @param callback The callback
   */
  updateUser(username: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param username name that need to be deleted
   * @param options The optional parameters
   * @param callback The callback
   */
  updateUser(username: string, options: Models.SwaggerPetstoreUpdateUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updateUser(username: string, options?: Models.SwaggerPetstoreUpdateUserOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        username,
        options
      },
      updateUserOperationSpec,
      callback);
  }

  /**
   * This can only be done by the logged in user.
   * @summary Delete user
   * @param username The name that needs to be deleted
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteUser(username: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param username The name that needs to be deleted
   * @param callback The callback
   */
  deleteUser(username: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param username The name that needs to be deleted
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteUser(username: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteUser(username: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        username,
        options
      },
      deleteUserOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addPetUsingByteArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/pet",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: {
      serializedName: "body",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    405: {},
    default: {}
  },
  serializer
};

const addPetOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/pet",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Pet
  },
  responses: {
    405: {},
    default: {}
  },
  serializer
};

const updatePetOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "v2/pet",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Pet
  },
  responses: {
    400: {},
    404: {},
    405: {},
    default: {}
  },
  serializer
};

const findPetsByStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/pet/findByStatus",
  queryParameters: [
    Parameters.status0
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Pet"
            }
          }
        }
      }
    },
    400: {},
    default: {}
  },
  serializer
};

const findPetsByTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/pet/findByTags",
  queryParameters: [
    Parameters.tags
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Pet"
            }
          }
        }
      }
    },
    400: {},
    default: {}
  },
  serializer
};

const findPetsWithByteArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/pet/{petId}",
  urlParameters: [
    Parameters.petId0
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const getPetByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/pet/{petId}",
  urlParameters: [
    Parameters.petId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    },
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const updatePetWithFormOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/pet/{petId}",
  urlParameters: [
    Parameters.petId1
  ],
  formDataParameters: [
    Parameters.name,
    Parameters.status1
  ],
  contentType: "application/x-www-form-urlencoded",
  responses: {
    405: {},
    default: {}
  },
  serializer
};

const deletePetOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "v2/pet/{petId}",
  urlParameters: [
    Parameters.petId0
  ],
  headerParameters: [
    Parameters.apiKey
  ],
  responses: {
    400: {},
    default: {}
  },
  serializer
};

const uploadFileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/pet/{petId}/uploadImage",
  urlParameters: [
    Parameters.petId0
  ],
  formDataParameters: [
    Parameters.additionalMetadata,
    Parameters.file
  ],
  contentType: "multipart/form-data",
  responses: {
    default: {}
  },
  serializer
};

const getInventoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/store/inventory",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const placeOrderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/store/order",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Order
  },
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    400: {},
    default: {}
  },
  serializer
};

const getOrderByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/store/order/{orderId}",
  urlParameters: [
    Parameters.orderId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const deleteOrderOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "v2/store/order/{orderId}",
  urlParameters: [
    Parameters.orderId
  ],
  responses: {
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const createUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/user",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.User
  },
  responses: {
    default: {}
  },
  serializer
};

const createUsersWithArrayInputOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/user/createWithArray",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: {
      serializedName: "body",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "User"
          }
        }
      }
    }
  },
  responses: {
    default: {}
  },
  serializer
};

const createUsersWithListInputOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/user/createWithList",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: {
      serializedName: "body",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "User"
          }
        }
      }
    }
  },
  responses: {
    default: {}
  },
  serializer
};

const loginUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/user/login",
  queryParameters: [
    Parameters.username0,
    Parameters.password
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    400: {},
    default: {}
  },
  serializer
};

const logoutUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/user/logout",
  responses: {
    default: {}
  },
  serializer
};

const getUserByNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/user/{username}",
  urlParameters: [
    Parameters.username1
  ],
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const updateUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "v2/user/{username}",
  urlParameters: [
    Parameters.username1
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.User
  },
  responses: {
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const deleteUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "v2/user/{username}",
  urlParameters: [
    Parameters.username1
  ],
  responses: {
    400: {},
    404: {},
    default: {}
  },
  serializer
};

export {
  SwaggerPetstore,
  SwaggerPetstoreContext,
  Models as SwaggerPetstoreModels,
  Mappers as SwaggerPetstoreMappers
};
