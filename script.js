// Toggle Legacy Details
document.getElementById('explore-btn').addEventListener('click', () => {
    const legacyDetails = document.getElementById('legacy-details');
    if (legacyDetails.classList.contains('hidden')) {
      legacyDetails.classList.remove('hidden');
    } else {
      legacyDetails.classList.add('hidden');
    }
  });
  
  // Toggle World Record Details Modal
  document.getElementById('start-exploring-btn').addEventListener('click', () => {
    const modal = document.getElementById('record-details-modal');
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  });
  
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('record-details-modal').classList.add('hidden');
  });