'use strict';

// If the response lacks a Vary: header, fix it in a CloudFront Origin Response trigger.
// From: https://forums.aws.amazon.com/thread.jspa?messageID=796312
// Also see: https://serverfault.com/questions/856904/chrome-s3-cloudfront-no-access-control-allow-origin-header-on-initial-xhr-req/856948#856948

exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  if (!headers['vary'])
  {
    headers['vary'] = [
      { key: 'Vary', value: 'Access-Control-Request-Headers' },
      { key: 'Vary', value: 'Access-Control-Request-Method' },
      { key: 'Vary', value: 'Origin' },
    ];
  }
  callback(null, response);
};
