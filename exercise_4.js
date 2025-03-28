// Please paste your JavaScript code here

function addLoyalty() {
    let loyaltyDiscount = 0;
  
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