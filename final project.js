// Please paste your JavaScript code here
import sinon from "sinon";
import pricePromotionData from "./PricePromotion.json" assert { type: "json" };
import loyaltyFundAllowanceData from "./LoyaltyFundAllowances.json" assert { type: "json" };
import oauthData from "./Oauth.json" assert { type: "json" };
import getAllOffers from "./GetAllOffers.json" assert { type: "json" };
import posFetchResponse from "./POSFetchResponse.json" assert { type: "json" };
import posFinalizeResponse from "./POSFinalizeResponse.json" assert { type: "json" };

let productsData = [];
let loyaltyData = [];
let allOffers = [];

const stub = sinon.stub(window, "fetch");

stub
  .withArgs("https://api.insightsc3m.com/altria/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
    },
    body: sinon.match.any,
  })
  .resolves(Promise.resolve(oauthData));

stub
  .withArgs(
    "https://api.insightsc3m.com/PricePromotions/v3/ProductPriceAndAllowances?operatingCompany=0004&cycleCode=202504&accountNumber=051276",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "test",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiJodHRwczovL2FwaS5kZXYuaW5zaWdodHNjM20uY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTM1YjJkODctNjY0Zi00MTVhLWI3ZmEtZmQzZjEwODZkNDUwLyIsImlhdCI6MTc0MTYxNjI5MywibmJmIjoxNzQxNjE2MjkzLCJleHAiOjE3NDE2MjAxOTMsImFpbyI6ImsyUmdZQ2hPWTFDOHpHUFhLYTdrMmFFNHhYUTZBQT09IiwiYXBwaWQiOiJmMTlmMDVjMi05YzMyLTQyMTEtYWEyYS1kODVkY2Q0OWZmMmUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAvIiwicmgiOiIxLkFWY0FoeTFiVTA5bVdrRzMtdjBfRUliVVVPZVFFdjRnSExkT3BCN196MkRDZkpiYkFBQlhBQS4iLCJ0aWQiOiI1MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAiLCJ1dGkiOiIteHpwYUpVMEJVaUQtZ2kwaTlZY0FBIiwidmVyIjoiMS4wIn0.YOVvDBj7cF62M0k88ZCWU95EiTl7cTWH9oW7mqi5GqKHu4b8_vCJcIaG8_CWE1qfXMhZ1a2QReylwuS4SZF09fZNK8u73AqVNPsfivzmEdk5Ft9VLMZ6fh65y1oUxaXStV-GtHtlQ2xNho2kbuDHRpZb5jpGNkMeJ-A4LJ-rvv__IIAu8Zco0h-dhtaAy2z1-SruonREbx1mKG-MOvB-IUvbs-3LJWFN2U79u4B77EdifYn8xTnWbxal_nDJapoHftjPjZiE4cCs1lMneolL83m_dSLFsls00-beYhg6U3PLQvg-s_LloYbT0hYyFyRASY5dyEgxIWLYRvCfWKd9QQ",
      },
    }
  )
  .resolves(Promise.resolve(pricePromotionData));

stub
  .withArgs(
    "https://api.insightsc3m.com/LoyaltyFundAllowances/v1/LoyaltyFundAllowances?operatingCompany=0004&cycleCode=202504&accountNumber=051276",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "test",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiJodHRwczovL2FwaS5kZXYuaW5zaWdodHNjM20uY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTM1YjJkODctNjY0Zi00MTVhLWI3ZmEtZmQzZjEwODZkNDUwLyIsImlhdCI6MTc0MTYxNjI5MywibmJmIjoxNzQxNjE2MjkzLCJleHAiOjE3NDE2MjAxOTMsImFpbyI6ImsyUmdZQ2hPWTFDOHpHUFhLYTdrMmFFNHhYUTZBQT09IiwiYXBwaWQiOiJmMTlmMDVjMi05YzMyLTQyMTEtYWEyYS1kODVkY2Q0OWZmMmUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAvIiwicmgiOiIxLkFWY0FoeTFiVTA5bVdrRzMtdjBfRUliVVVPZVFFdjRnSExkT3BCN196MkRDZkpiYkFBQlhBQS4iLCJ0aWQiOiI1MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAiLCJ1dGkiOiIteHpwYUpVMEJVaUQtZ2kwaTlZY0FBIiwidmVyIjoiMS4wIn0.YOVvDBj7cF62M0k88ZCWU95EiTl7cTWH9oW7mqi5GqKHu4b8_vCJcIaG8_CWE1qfXMhZ1a2QReylwuS4SZF09fZNK8u73AqVNPsfivzmEdk5Ft9VLMZ6fh65y1oUxaXStV-GtHtlQ2xNho2kbuDHRpZb5jpGNkMeJ-A4LJ-rvv__IIAu8Zco0h-dhtaAy2z1-SruonREbx1mKG-MOvB-IUvbs-3LJWFN2U79u4B77EdifYn8xTnWbxal_nDJapoHftjPjZiE4cCs1lMneolL83m_dSLFsls00-beYhg6U3PLQvg-s_LloYbT0hYyFyRASY5dyEgxIWLYRvCfWKd9QQ",
      },
    }
  )
  .resolves(Promise.resolve(loyaltyFundAllowanceData));

stub
  .withArgs("https://api.insightsc3m.com/LoyaltyFunds/AllOffers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiJodHRwczovL2FwaS5kZXYuaW5zaWdodHNjM20uY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTM1YjJkODctNjY0Zi00MTVhLWI3ZmEtZmQzZjEwODZkNDUwLyIsImlhdCI6MTc0MTYxNjI5MywibmJmIjoxNzQxNjE2MjkzLCJleHAiOjE3NDE2MjAxOTMsImFpbyI6ImsyUmdZQ2hPWTFDOHpHUFhLYTdrMmFFNHhYUTZBQT09IiwiYXBwaWQiOiJmMTlmMDVjMi05YzMyLTQyMTEtYWEyYS1kODVkY2Q0OWZmMmUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAvIiwicmgiOiIxLkFWY0FoeTFiVTA5bVdrRzMtdjBfRUliVVVPZVFFdjRnSExkT3BCN196MkRDZkpiYkFBQlhBQS4iLCJ0aWQiOiI1MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAiLCJ1dGkiOiIteHpwYUpVMEJVaUQtZ2kwaTlZY0FBIiwidmVyIjoiMS4wIn0.YOVvDBj7cF62M0k88ZCWU95EiTl7cTWH9oW7mqi5GqKHu4b8_vCJcIaG8_CWE1qfXMhZ1a2QReylwuS4SZF09fZNK8u73AqVNPsfivzmEdk5Ft9VLMZ6fh65y1oUxaXStV-GtHtlQ2xNho2kbuDHRpZb5jpGNkMeJ-A4LJ-rvv__IIAu8Zco0h-dhtaAy2z1-SruonREbx1mKG-MOvB-IUvbs-3LJWFN2U79u4B77EdifYn8xTnWbxal_nDJapoHftjPjZiE4cCs1lMneolL83m_dSLFsls00-beYhg6U3PLQvg-s_LloYbT0hYyFyRASY5dyEgxIWLYRvCfWKd9QQ",
    },
  })
  .resolves(Promise.resolve(getAllOffers));

stub
  .withArgs("https://api.insightsc3m.com/LoyaltyFunds/ConsumerOffers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiJodHRwczovL2FwaS5kZXYuaW5zaWdodHNjM20uY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTM1YjJkODctNjY0Zi00MTVhLWI3ZmEtZmQzZjEwODZkNDUwLyIsImlhdCI6MTc0MTYxNjI5MywibmJmIjoxNzQxNjE2MjkzLCJleHAiOjE3NDE2MjAxOTMsImFpbyI6ImsyUmdZQ2hPWTFDOHpHUFhLYTdrMmFFNHhYUTZBQT09IiwiYXBwaWQiOiJmMTlmMDVjMi05YzMyLTQyMTEtYWEyYS1kODVkY2Q0OWZmMmUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAvIiwicmgiOiIxLkFWY0FoeTFiVTA5bVdrRzMtdjBfRUliVVVPZVFFdjRnSExkT3BCN196MkRDZkpiYkFBQlhBQS4iLCJ0aWQiOiI1MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAiLCJ1dGkiOiIteHpwYUpVMEJVaUQtZ2kwaTlZY0FBIiwidmVyIjoiMS4wIn0.YOVvDBj7cF62M0k88ZCWU95EiTl7cTWH9oW7mqi5GqKHu4b8_vCJcIaG8_CWE1qfXMhZ1a2QReylwuS4SZF09fZNK8u73AqVNPsfivzmEdk5Ft9VLMZ6fh65y1oUxaXStV-GtHtlQ2xNho2kbuDHRpZb5jpGNkMeJ-A4LJ-rvv__IIAu8Zco0h-dhtaAy2z1-SruonREbx1mKG-MOvB-IUvbs-3LJWFN2U79u4B77EdifYn8xTnWbxal_nDJapoHftjPjZiE4cCs1lMneolL83m_dSLFsls00-beYhg6U3PLQvg-s_LloYbT0hYyFyRASY5dyEgxIWLYRvCfWKd9QQ",
    },
    body: {
      ChannelType: "POS",
      Action: "Fetch",
      Details: [
        {
          Store: {
            StoreID: "12345",
            RCN: "",
            ManagementAccountNumber: "098765",
          },
          Consumer: [
            {
              LoyaltyID: "camptest1",
            },
          ],
        },
      ],
    },
  })
  .resolves(Promise.resolve(posFetchResponse));

stub
  .withArgs("https://api.insightsc3m.com/LoyaltyFunds/ConsumerOffers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiJodHRwczovL2FwaS5kZXYuaW5zaWdodHNjM20uY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTM1YjJkODctNjY0Zi00MTVhLWI3ZmEtZmQzZjEwODZkNDUwLyIsImlhdCI6MTc0MTYxNjI5MywibmJmIjoxNzQxNjE2MjkzLCJleHAiOjE3NDE2MjAxOTMsImFpbyI6ImsyUmdZQ2hPWTFDOHpHUFhLYTdrMmFFNHhYUTZBQT09IiwiYXBwaWQiOiJmMTlmMDVjMi05YzMyLTQyMTEtYWEyYS1kODVkY2Q0OWZmMmUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAvIiwicmgiOiIxLkFWY0FoeTFiVTA5bVdrRzMtdjBfRUliVVVPZVFFdjRnSExkT3BCN196MkRDZkpiYkFBQlhBQS4iLCJ0aWQiOiI1MzViMmQ4Ny02NjRmLTQxNWEtYjdmYS1mZDNmMTA4NmQ0NTAiLCJ1dGkiOiIteHpwYUpVMEJVaUQtZ2kwaTlZY0FBIiwidmVyIjoiMS4wIn0.YOVvDBj7cF62M0k88ZCWU95EiTl7cTWH9oW7mqi5GqKHu4b8_vCJcIaG8_CWE1qfXMhZ1a2QReylwuS4SZF09fZNK8u73AqVNPsfivzmEdk5Ft9VLMZ6fh65y1oUxaXStV-GtHtlQ2xNho2kbuDHRpZb5jpGNkMeJ-A4LJ-rvv__IIAu8Zco0h-dhtaAy2z1-SruonREbx1mKG-MOvB-IUvbs-3LJWFN2U79u4B77EdifYn8xTnWbxal_nDJapoHftjPjZiE4cCs1lMneolL83m_dSLFsls00-beYhg6U3PLQvg-s_LloYbT0hYyFyRASY5dyEgxIWLYRvCfWKd9QQ",
    },
    body: {
      ChannelType: "POS",
      Action: "Finalize",
      Details: sinon.match.any,
    },
  })
  .resolves(Promise.resolve(posFinalizeResponse));

stub.callThrough();

function callPricePromotionsAPI() {
  return fetch("https://api.insightsc3m.com/altria/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
    },
    body: JSON.stringify({
      grant_type: "test",
      client_id: "test",
      client_secret: "test",
      scope: "test",
    }),
  }).then((data) =>
    fetch(
      //URL must exactly match the URL in the stub call
      "https://api.insightsc3m.com/PricePromotions/v3/ProductPriceAndAllowances?operatingCompany=0004&cycleCode=202504&accountNumber=051276",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "test",
          Authorization: `Bearer ${data["access_token"]}`,
        },
      }
    ).then((data) => {
      return data;
    })
  );
}

function callLoyaltyFundAllowanceAPI() {
  return fetch("https://api.insightsc3m.com/altria/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
    },
    body: JSON.stringify({
      grant_type: "test",
      client_id: "test",
      client_secret: "test",
      scope: "test",
    }),
  }).then((data) =>
    fetch(
      //URL must exactly match the URL in the stub call
      "https://api.insightsc3m.com/LoyaltyFundAllowances/v1/LoyaltyFundAllowances?operatingCompany=0004&cycleCode=202504&accountNumber=051276",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "test",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  );
}

function callGetAllOffers() {
  //fill in code to call getAllOffers API. Hint: look at the other callAPI functions!
  return fetch("https://api.insightsc3m.com/altria/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
    },
    body: JSON.stringify({
      grant_type: "test",
      client_id: "test",
      client_secret: "test",
      scope: "test",
    }),
  }).then((data) =>
    fetch("https://api.insightsc3m.com/LoyaltyFunds/AllOffers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "test",
        Authorization: `Bearer ${data["access_token"]}`,
      },
    }).then((response) => response.json())
  );
}

function callPosFetch(LID) {
  return fetch("https://api.insightsc3m.com/altria/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
    },
    body: {
      grant_type: "test",
      client_id: "test",
      client_secret: "test",
      scope: "test",
    },
  }).then((data) =>
    fetch("https://api.insightsc3m.com/LoyaltyFunds/ConsumerOffers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "test",
        Authorization: `Bearer ${data["access_token"]}`,
      },
      body: {
        ChannelType: "POS",
        Action: "Fetch",
        Details: [
          {
            Store: {
              StoreID: "12345",
              RCN: "",
              ManagementAccountNumber: "098765",
            },
            Consumer: [
              {
                LoyaltyID: LID,
              },
            ],
          },
        ],
      },
    }).then((data) => {
      return data;
    })
  );
}

function callPosFinalize(lid, offers, basket) {
  return fetch("https://api.insightsc3m.com/altria/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "test",
    },
    body: JSON.stringify({
      grant_type: "test",
      client_id: "test",
      client_secret: "test",
      scope: "test",
    }),
  }).then((data) =>
    fetch("https://api.insightsc3m.com/LoyaltyFunds/ConsumerOffers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "test",
        Authorization: `Bearer ${data["access_token"]}`,
      },
      body: {
        ChannelType: "POS",
        Action: "Finalize",
        Details: [
          {
            Consumer: [
              {
                Transactions: [
                  {
                    Basket: basket, // array of products,
                    OffersClaimed: offers, // array of offers,
                  },
                ],
                LoyaltyID: lid,
              },
            ],
            Store: {
              ManagementAccountNumber: "098765",
              RCN: "",
              StoreID: "12345",
            },
          },
        ],
      },
    }).then((data) => {
      return data;
    })
  );
}

//NEW code to initialize productData and loyaltyData
callPricePromotionsAPI().then((response) => {
  productsData = response;
});
callLoyaltyFundAllowanceAPI().then((response) => {
  loyaltyData = response;
});

//HW: implement a loyalty flow to add loyalty discounts on qualifying transactions.
//Hint: find out what counts as a qualifying transaction by looking at:
//  loyaltyData[0].LoyaltyAllowances[0].MaximumAllowancePerTransaction,
//  loyaltyData[0].LoyaltyAllowances[0].MinimumQuantity,
//  loyaltyData[0].LoyaltyAllowances[0].Allowances[0].Amount
//  loyaltyData[0].LoyaltyAllowances[0].SKUGUID
//note: since a CARTON is 10 PACKS, 1 carton should be enough to trigger the loyalty discount

// Implement PVDcheck(LID) function
function PVDcheck(LID) {
  return callPosFetch(LID).then((posFetchResult) => {
    // Get the offer from posFetch
    const posFetchOffer = posFetchResult.Details[0].Offers[0];

    // Find matching offer in allOffers
    const matchingOffer = allOffers.find(
      (offer) => offer.offerID === posFetchOffer.offerID
    );

    if (!matchingOffer) return 0;

    // Count eligible items in cart
    const eligibleItems = shoppingCart.filter((item) =>
      matchingOffer.brands.includes(item.brandGUID)
    );

    const totalEligibleQty = eligibleItems.reduce(
      (total, item) => total + item.qty,
      0
    );

    // Check if meets minimum quantity
    return totalEligibleQty >= matchingOffer.minimumQuantity
      ? matchingOffer.offerValue
      : 0;
  });
}

// Modify addLoyalty() function
function addLoyalty() {
  let loyaltyDiscount = 0;
  let PVDdiscount = 0;

  // Loyalty Discount Logic
  const eligibleItems = shoppingCart.filter((item) =>
    loyaltyData[0].LoyaltyAllowances[0].SKUGUID.includes(item.GUID)
  );

  const totalEligibleQty = eligibleItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  if (totalEligibleQty >= loyaltyData[0].LoyaltyAllowances[0].MinimumQuantity) {
    loyaltyDiscount = Math.min(
      loyaltyData[0].LoyaltyAllowances[0].Allowances[0].Amount,
      1.5 // Maximum loyalty discount per transaction
    );
  }

  // P+ Discount Logic (assuming LID is 'camptest1')
  PVDcheck("camptest1").then((discount) => {
    PVDdiscount = Math.min(discount, 1.0); // Maximum P+ discount per transaction
    updateCartUI(loyaltyDiscount, PVDdiscount);
  });
}

//bonus: try implmenting Marlboro Multi-pack found in productsData[0].OtherAllowances! Unlike loyalty discounts, Multi-pack discounts are NOT limited to 1 per transaction.
function multiPack() {
  const multiPackGUIDs = productsData[0].OtherAllowances[0].SKUGUID;
  let eligibleItemCount = 0;

  shoppingCart.forEach((item) => {
    if (multiPackGUIDs.includes(item.GUID)) {
      eligibleItemCount += item.qty * item.conversionFactor;
    }
  });
  if (eligibleItemCount % 2 !== 0) {
    eligibleItemCount -= 1;
  }
  return eligibleItemCount * -0.25;
}

// Add product to shopping cart
function addProduct() {
  const upcInput = document.querySelector(".product-inputs input").value.trim();

  const product = findProductByUPC(upcInput);
  if (!product) {
    alert("Product not found");
    return;
  }

  addToCart(product, upcInput);
  document.querySelector(".product-inputs input").value = "";
}

// Find product by UPC
function findProductByUPC(upc) {
  for (const product of productsData[0].Products) {
    for (const packing of product.Packings) {
      if (packing.UPC === upc) {
        return {
          ...product,
          UOM: packing.UOM,
          ConversionFactor: packing.ConversionFactor,
        };
      }
    }
  }
  return null;
}

// Implement findBrandGUID(upc) function
function findBrandGUID(upc) {
  const product = findProductByUPC(upc);
  return product ? product.BrandGUID : null;
}

// Add product to cart and update UI
let shoppingCart = [];

function addToCart(product, upc) {
  const existingItem = shoppingCart.find((item) => item.UPC === upc);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    shoppingCart.push({
      UPC: upc,
      name: `${product.SKUName} (${product.UOM})`,
      qty: 1,
      price: getPriceForUPC(product.SKUGUID, product.ConversionFactor) || 0,
      GUID: product.SKUGUID,
      conversionFactor: product.ConversionFactor,
      brandGUID: product.BrandGUID, // Add brandGUID when adding to cart
    });
  }
  updateCartUI();
}

//Get price for a product SKUGUID
function getPriceForUPC(skuguid, conversionFactor) {
  for (const allowance of productsData[0].PerUnitAllowances || []) {
    if (allowance.SKUGUID.includes(skuguid)) {
      const maxPrice = allowance.Allowances[0].MaxSuggestedRetailSellingPrice;
      if (maxPrice === undefined) {
        return 14 * conversionFactor;
      } else {
        return maxPrice * conversionFactor;
      }
    }
  }
}

// Update cart UI
function updateCartUI(loyaltyDiscount = 0, PVDdiscount = 0) {
  const cartTable = document.querySelector("#shopping-cart tbody");
  const cartTotal = document.querySelector("#total");
  let total = 0;
  multiPackDiscount = multiPack();

  cartTable.innerHTML = "";

  shoppingCart.forEach((item) => {
    const row = document.createElement("tr");
    const itemTotal = item.qty * item.price;
    total += itemTotal;
    row.innerHTML = `
              <td>${item.qty}</td>
              <td>${item.name}</td>
              <td>$${(item.qty * item.price).toFixed(2)}</td>
          `;
    cartTable.appendChild(row);

    document.querySelector(
      "#multiPack"
    ).innerHTML = `Multi-pack Discount: $${multiPackDiscount.toFixed(2)}`;

    document.querySelector(
      "#loyaltyDiscount"
    ).innerHTML = `Loyalty Discount: $${loyaltyDiscount.toFixed(2)}`;

    document.querySelector(
      "#pvdDiscount"
    ).innerHTML = `P+ Discount: $${PVDdiscount.toFixed(2)}`;

    total += loyaltyDiscount;
    total += multiPackDiscount;
    total += PVDDiscount;
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
  });
}

function checkout() {
  // Collect loyalty offers from cart
  const offers = shoppingCart
    .filter((item) => item.brandGUID) // Only items with brandGUID
    .map((item) => ({
      offerID: "", // You might want to populate this from P+ offer
      brandGUID: item.brandGUID,
    }));

  // Call POS Finalize
  callPosFinalize("camptest1", offers, shoppingCart)
    .then((response) => {
      // Clear shopping cart after successful checkout
      shoppingCart = [];
      updateCartUI();
      alert("Checkout successful!");
    })
    .catch((error) => {
      console.error("Checkout failed:", error);
      alert("Checkout failed. Please try again.");
    });
}

// Expose addProduct globally so it can be accessed from the HTML button
window.addProduct = addProduct;
window.addLoyalty = addLoyalty;
window.checkout = checkout;
window.shoppingCart = shoppingCart;