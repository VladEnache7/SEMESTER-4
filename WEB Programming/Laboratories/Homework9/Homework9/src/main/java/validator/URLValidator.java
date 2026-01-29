package validator;

import exception.URLException;
import model.URL;

import java.util.ArrayList;
import java.util.List;

public class URLValidator {
    public static void validateURL(URL URL) throws URLException {
        List<String> errors = new ArrayList<>();

        // URL validation
        if (URL.getLink() == null || URL.getLink().isEmpty() || URL.getLink().length() > 255) {
            errors.add("Title must be between 1 and 255 characters");
        }

        if (!errors.isEmpty()) {
            throw new URLException(String.join(", ", errors));
        }
    }
}
