Feature: Combiner

    Scenario: Combine Tpo and oCder
        Given A string "Tpo" and another string "oCder"
        When I call combiner passing both strings as parameters
        Then The result should be "TopCoder"

    Scenario: Combine aa and bb
        Given A string "aa" and another string "bb"
        When I call combiner passing both strings as parameters
        Then The result should be "abab"